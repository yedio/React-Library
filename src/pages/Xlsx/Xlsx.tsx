import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import * as XLSX from 'xlsx';
import TabMenu from '../../components/TabMenu';

interface IxlsxJson {
  nickname: string;
  point: number;
  note: string;
}

export default function Xlsx() {
  const TAB_MENU = ['다운로드', '업로드'];
  const XLSX_TITLE = ['메뉴', '추천메뉴', '가격'];
  const SAMPLE_XLSX_TITLE = ['nickname', 'point', 'reason', 'note'];

  const [selectedMenu, setSelectedMenu] = useState<string>('다운로드');
  const [xlsxJson, setXlsxJson] = useState<any>([]);

  const fileRef: React.MutableRefObject<any> = useRef();
  const SheetJSFT = ['xlsx', 'xlsb', 'xlsm', 'xls', 'csv']
    .map(function (x) {
      return '.' + x;
    })
    .join(',');

  const handleTabMenuSelect = (menu: string) => {
    setSelectedMenu(menu);
  };

  const checkTableName = (uploadTitle: string[]): boolean => {
    for (let i = 0; i < SAMPLE_XLSX_TITLE.length; i++) {
      if (uploadTitle.indexOf(SAMPLE_XLSX_TITLE[i]) < 0) {
        return false;
      }
    }
    return true;
  };

  const checkXlsxTable = (row: IxlsxJson[]) => {
    if (!(row.length > 0)) {
      window.alert(`엑셀 데이터 형식을 확인해주세요.`);
      fileRef.current.value = '';
    } else {
      const uploadTbTitle = Object.keys(row[0]);
      if (
        uploadTbTitle.length === SAMPLE_XLSX_TITLE.length &&
        checkTableName(uploadTbTitle)
      ) {
        setXlsxJson(row);
      } else {
        window.alert('엑셀 데이터 형식을 확인해주세요.');
        fileRef.current.value = '';
      }
    }
  };

  const handleFile = (file: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      const workBook = XLSX.read(data, { type: 'binary' });
      workBook.SheetNames.forEach(sheetName => {
        const row: any[] = XLSX.utils.sheet_to_json(
          workBook.Sheets[sheetName],
          { defval: '' }
        );

        const xlsxData = JSON.stringify(row);
        setXlsxJson(xlsxData);
        console.log(xlsxData);
        // checkXlsxTable(row);
      });
    };
    reader.readAsBinaryString(file);
  };

  const handleExcelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setXlsxJson([]);
    if (files && files[0]) handleFile(files[0]);
  };

  const fileReset = () => {
    fileRef.current.value = '';
    setXlsxJson([]);
  };

  const xlsxResultExport = (resultData: any) => {
    const ws = XLSX.utils.json_to_sheet(resultData);
    const wb = XLSX.utils.book_new();

    XLSX_TITLE.forEach((x, idx) => {
      const cell = XLSX.utils.encode_cell({ c: idx, r: 0 });
      ws[cell].v = x;
    });

    XLSX.utils.book_append_sheet(wb, ws, 'sheet1');
    XLSX.writeFile(wb, `result_${new Date().getTime()}.xlsx`);
  };

  const downloadXlsx = () => {
    fetch(`/data/xlsx/xlsx.json`)
      .then(res => res.json())
      .then(res => {
        if (res.code === '0') {
          window.alert('다운로드 파일을 확인하세요');
          xlsxResultExport(res.data);
        }
      });
  };

  return (
    <Wrapper>
      <ContentsArea>
        <Title>
          <h1>Xlsx Controll</h1>
        </Title>
        <TabMenu
          TITLE={TAB_MENU}
          selectedMenu={selectedMenu}
          handleTabMenuSelect={handleTabMenuSelect}
        />
        {(function () {
          if (selectedMenu === '다운로드')
            return (
              <XlsxBtn onClick={() => downloadXlsx()}>엑셀 다운로드</XlsxBtn>
            );
          if (selectedMenu === '업로드')
            return (
              <>
                <XlsxUploadWrap>
                  <XlsxForm>
                    <XlsxUpload
                      id="fileUpload"
                      type="file"
                      ref={fileRef}
                      accept={SheetJSFT}
                      onChange={handleExcelUpload}
                    />
                    {xlsxJson.length > 0 ? (
                      <CancelBtn onClick={() => fileReset()} className="hidden">
                        삭제
                      </CancelBtn>
                    ) : null}
                  </XlsxForm>
                  <XlsxBtn htmlFor="fileUpload">엑셀 업로드</XlsxBtn>
                </XlsxUploadWrap>

                {xlsxJson.length > 0 && (
                  <ResultWrap>
                    <ResultTitle>xlsx JSON Value 🌎</ResultTitle>
                    <ResultValue>{xlsxJson}</ResultValue>
                  </ResultWrap>
                )}
              </>
            );
        })()}
      </ContentsArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 720px;
`;

const Title = styled.div`
  margin: 20px;
  h1 {
    font-size: 80px;
  }
`;

const XlsxUploadWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &.invisible {
    display: none;
  }
`;

const XlsxForm = styled.div`
  position: relative;
`;

const XlsxUpload = styled.input`
  position: inherit;
  margin-left: 5px;
  border: 1px solid rgb(212, 212, 212);
  border-radius: 3px 0 0 3px !important;
  border-right: 0 !important;
  height: 100%;
  padding: 5px;

  &::file-selector-button {
    display: none;
  }
`;

const CancelBtn = styled.button`
  /* display: block; */
  border: none;
  position: absolute;
  top: 9px;
  right: 8px;
  width: 14px;
  height: 14px;
  background: url('/images/close.svg') no-repeat 50% 50%;
  z-index: 10;
  cursor: pointer;

  &.hidden {
    font-size: 0;
    z-index: 9999;
  }
`;

const ResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 720px;
  margin: 30px;
`;

const ResultTitle = styled.div`
  width: 100%;
  padding: 5px;
  background-color: aliceblue;
  font-size: 20px;
  text-align: center;
`;

const ResultValue = styled.div`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  background-color: #f0f0f0;
  font-size: 14px;
  text-align: left;
  word-break: break-all;
  line-height: 20px;
  overflow-y: scroll;
  max-height: 500px;
`;

const XlsxBtn = styled.label`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 10px 0 35px;
  border-radius: 3px;
  background: url('/images/excel.png') no-repeat 10px 50%, #107c41;
  color: ${({ theme }) => theme.whiteColor} !important;
  line-height: 30px;
  font-size: 14px;
  cursor: pointer;
`;
