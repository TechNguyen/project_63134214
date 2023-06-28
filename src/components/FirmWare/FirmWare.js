import classNames from "classnames/bind";
import Styles from './FirmWare.module.scss'
import { Table, Space, Row, Col } from 'antd';
import qs from 'qs';
import { useEffect, useState } from 'react';
import Download from "@components/Download/Download";
import UploadFile from "@components/UploadFile/UploadFile";
import EditDevice from "@components/EditDevice/EditDevice";
import EditName from "@components/EditNamefile/EditNameFile";
import DeleteChoose from "@components/DeleteChoose/DeleteChoose";
import AddDevice from "@components/AddDevice/AddDevice";
import useFirmware from "@api/useFirmwares";
const cx = classNames.bind(Styles);

const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    sorter: true,
  },
  {
    title :'Name',
    dataIndex: 'Name'
  },
  {
    title :'Data',
    dataIndex: 'Data'
  },
  {
    title :'LocalLink',
    dataIndex: 'LocalLink'
  },
  {
    title :'Description',
    dataIndex: 'Description'
  },
  {
    title :'CreateAt',
    dataIndex: 'CreatedAt'
  },
  {
    title :'UpdateAt',
    dataIndex: 'UpdatedAt'
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
          <a><EditDevice /></a>
        <a><Download /></a>
      </Space>
    ),
  },
];
const FirmWare  = () => {
  const [bordered, setBordered] = useState(true);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState('large');
  const [expandable, setExpandable] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(false);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState(true);
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomRight');
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState();

  const [dataDevices, setData] = useState([])

 
  
  const { getFirms } = useFirmware();
  const handleGetAllDevice = async () => {
    handleLoadingChange(true)
    const {success, data} = await getFirms();
    if(success) {
      setData([...data])
      handleLoadingChange(false)
    }
  }
  useEffect(() => {
     handleGetAllDevice()
  }, []);

  const defaultExpandable = {
    expandedRowRender: (record) => <p>{record.description}</p>,
  };
  const defaultTitle = () => 'Here is title';
  const defaultFooter = () => 'Here is footer';
  // handleFunction
  const handleBorderChange = (enable) => {
    setBordered(enable);
  };
  const handleLoadingChange = (enable) => {
    setLoading(enable);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleTableLayoutChange = (e) => {
    setTableLayout(e.target.value);
  };
  const handleExpandChange = (enable) => {
    setExpandable(enable ? defaultExpandable : undefined);
  };
  const handleEllipsisChange = (enable) => {
    setEllipsis(enable);
  };
  const handleTitleChange = (enable) => {
    setShowTitle(enable);
  };
  const handleHeaderChange = (enable) => {
    setShowHeader(enable);
  };
  const handleFooterChange = (enable) => {
    setShowFooter(enable);
  };
  const handleRowSelectionChange = (enable) => {
    setRowSelection(enable ? {} : undefined);
  };
  const handleYScrollChange = (enable) => {
    setYScroll(enable);
  };
  const handleXScrollChange = (e) => {
    setXScroll(e.target.value);
  };
  const handleDataChange = (newHasData) => {
    setHasData(newHasData);
  };
  // 
  const scroll = {};
  if (yScroll) {
    scroll.y = 300;
  }
  if (xScroll) {
    scroll.x = '100%';
  }
  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis,
  }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }
  const tableProps = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };

  
      return (
      <div style={{height: '100%', width: '100%'}}>
            <Row className={cx('table__header')}>
              <Col
                xs={{
                  span: 2,
                  offset: 1,
                }}
                lg={{
                  span: 3,
                  offset: 4,
                }}
              >
                <DeleteChoose />
              </Col>
              <Col>
                  <AddDevice />
              </Col>
            </Row>
  
  
            <Table
            {...tableProps}
            pagination={{
                position: [top, bottom],
            }}
            columns={tableColumns}
            dataSource={hasData ? dataDevices : []}
            scroll={scroll}
            />
      </div>
    );
};
export default FirmWare ;



