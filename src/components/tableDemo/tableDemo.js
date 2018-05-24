import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Input, Button, Icon, DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import axios from 'axios';

const dateFormat = "YYYY-MM-DD HH:mm:ss";

const data = [{"Id":"kasjdgjasgdajhdsghagdsjgahd","ProjectId":"controller123","ControllerId":"project123","DevOneCode":"Code1","DeviceNumber":"12345","DeviceType":"01","DeviceTypeName":"Fire","DevProperty":"None","Description":"Deafult","RegisteredFlag":"01"},{"Id":"dsfdsfgdgdfgdfgdfgd","ProjectId":"controller100","ControllerId":"project400","DevOneCode":"Code2","DeviceNumber":"234324","DeviceType":"01","DeviceTypeName":"Fire","DevProperty":"None1","Description":"Deafult1","RegisteredFlag":"01"},{"Id":"asdfsadfsfsdf","ProjectId":"controller101","ControllerId":"project403","DevOneCode":"Code3","DeviceNumber":"34234","DeviceType":"02","DeviceTypeName":"Water","DevProperty":"None2","Description":"Deafult2","RegisteredFlag":"01"},{"Id":"zcxvcxcvcv","ProjectId":"controller201","ControllerId":"project604","DevOneCode":"Code3","DeviceNumber":"34234","DeviceType":"02","DeviceTypeName":"Water","DevProperty":"None2","Description":"Deafult2","RegisteredFlag":"01"},{"Id":"jkjkgkfhjghjfghyngcvnc","ProjectId":"controller601","ControllerId":"project604","DevOneCode":"Code6","DeviceNumber":"34234","DeviceType":"02","DeviceTypeName":"Water","DevProperty":"None2","Description":"Deafult4","RegisteredFlag":"01"},{"Id":"sdgvdxvxgfvdhgfjyhu","ProjectId":"controller601","ControllerId":"project04","DevOneCode":"Code7","DeviceNumber":"34234","DeviceType":"02","DeviceTypeName":"Water","DevProperty":"None2","Description":"Deafult4","RegisteredFlag":"01"},{"Id":"vdsdkfhjskdhfjksdhfkjsd","ProjectId":"controller601","ControllerId":"project08","DevOneCode":"Code9","DeviceNumber":"34234","DeviceType":"02","DeviceTypeName":"Water","DevProperty":"None2","Description":"Deafult5","RegisteredFlag":"01"},{"Id":"jljgkghjnntfdfdf","ProjectId":"controller601","ControllerId":"project08","DevOneCode":"Code11","DeviceNumber":"34234","DeviceType":"02","DeviceTypeName":"Water","DevProperty":"None2","Description":"Deafult5","RegisteredFlag":"01"},{"Id":"cvbcvnbnvvnvcvngg","ProjectId":"controller61","ControllerId":"project18","DevOneCode":"Code11","DeviceNumber":"34234","DeviceType":"02","DeviceTypeName":"Fire","DevProperty":"None2","Description":"Deafult5","RegisteredFlag":"01"},{"Id":"qetertrgfbcgfncv","ProjectId":"controller1","ControllerId":"project8","DevOneCode":"Code11","DeviceNumber":"34234","DeviceType":"02","DeviceTypeName":"Fire","DevProperty":"None2","Description":"Deafult5","RegisteredFlag":"01"},{"Id":"asdsdasd","ProjectId":"Controller001","ControllerId":"sdasdasdasdasd","DevOneCode":"Device1","DeviceNumber":"123","DeviceType":"02","DeviceTypeName":"Fire","DevProperty":"No","Description":"None","RegisteredFlag":"01"}];

//var data = [];

function onTimeChange(value, dateString) {
  console.log('Selected Time: ', dateString);
  
}

function onTimeOk(value) {
  console.log('onOk: ', value);
}

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    //disabled: record.name === 'Disabled User', // Column configuration not to be checked
    project: record.project,
  }),
};

class TableDemo extends Component {
  constructor() {
    super();
    this.state = {
      filterDropdownVisible: false,
      data,
      searchText: '',
      filtered: false
    };
  }

  /*componentDidMount(){


     axios.get(`https://devicecfgdowload.chinacloudsites.cn/api/DeviceCfgDownload/DownloadAll`).then(res => {
          console.log(this.state.data)
          console.log(res)
          
          // const data = res.data.map(obj => obj.data);
          data = res.data;
          
          this.setState({data})
        })
        .catch(error => {
          console.log(error);
        })
  }*/
  

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  onSearch = () => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data:data.map((record) => {
        let matchstr = record.DeviceNumber.match(reg);
        if (!matchstr) {
          return null;
        }
        return {
          ...record,
          DeviceNumber: (
            <span>
              {record.DeviceNumber.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{matchstr[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  }
  render() {
    const columns = [{
      title: 'Id',
      dataIndex: 'Id',
      key: 'Id',
    },{
      title: 'ProjectId',
      dataIndex: 'ProjectId',
      key: 'ProjectId',
    },{
      title: 'ControllerId',
      dataIndex: 'ControllerId',
      key: 'ControllerId',
    },{
      title: 'DevOneCode',
      dataIndex: 'DevOneCode',
      key: 'DevOneCode',
    },{
       title: 'DeviceNumber',
       dataIndex: 'DeviceNumber',
       key: 'DeviceNumber',
       filterDropdown: (
         <div className="custom-filter-dropdown">
           <Input
            style={{width:150}}
            ref={ele => this.searchInput = ele}
            placeholder="Search DeviceNumber"
            value={this.state.searchText}
             onChange={this.onInputChange}
             onPressEnter={this.onSearch}
           />
           <Button type="primary" onClick={this.onSearch}>Search</Button>
         </div>
       ),
       filterIcon: <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
       filterDropdownVisible: this.state.filterDropdownVisible,
       onFilterDropdownVisibleChange: (visible) => {
         this.setState({
           filterDropdownVisible: visible,
         }, () => this.searchInput && this.searchInput.focus());
       },
     },{
      title: 'DeviceType',
      dataIndex: 'DeviceType',
      key: 'DeviceType',
    },{
      title: 'DeviceTypeName',
      dataIndex: 'DeviceTypeName',
      key: 'DeviceTypeName',
    },{
      title: 'DevProperty',
      dataIndex: 'DevProperty',
      key: 'DevProperty',
    }, {
      title: 'Description',
      dataIndex: 'Description',
      key: 'Description',
    },{
      title: 'RegisteredFlag',
      dataIndex: 'RegisteredFlag',
      key: 'RegisteredFlag',
    }, 
    // {
    //   title: 'Project',
    //   dataIndex: 'project',
    //   key: 'project',
    //   filterDropdown: (
    //     <div className="custom-filter-dropdown">
    //       <Input
    //         style={{width:150}}
    //         ref={ele => this.searchInput = ele}
    //         placeholder="Search project"
    //         value={this.state.searchText}
    //         onChange={this.onInputChange}
    //         onPressEnter={this.onSearch}
    //       />
    //       <Button type="primary" onClick={this.onSearch}>Search</Button>
    //     </div>
    //   ),
    //   filterIcon: <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
    //   filterDropdownVisible: this.state.filterDropdownVisible,
    //   onFilterDropdownVisibleChange: (visible) => {
    //     this.setState({
    //       filterDropdownVisible: visible,
    //     }, () => this.searchInput && this.searchInput.focus());
    //   },
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    //   filters: [{
    //     text: 'London',
    //     value: 'London',
    //   }, {
    //     text: 'New York',
    //     value: 'New York',
    //   }],
    //   onFilter: (value, record) => record.address.indexOf(value) === 0,
    // }, {
    //   title: 'Time',
    //   key: 'time',
    //   render: (text, record) => (
    //     <span>
    //       <DatePicker
    //         showTime
    //         format={dateFormat}
    //         placeholder="Select Time"
    //         defaultValue={moment(record.time, dateFormat)} format={dateFormat}
    //         onChange={onTimeChange}
    //         onOk={onTimeOk}
    //       />
    //     </span>
    //   ),
    // }, 
    // {
    //   title: 'Operation',
    //   key: 'operation',
    //   render: (text, record) => (
    //     <span>
    //      <Button type="primary">Submit</Button>
    //     </span>
    //   ),
    // }
    ];
    return  <div style={{ background: '#fff'}}><Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} /></div>;
  }
}
export default TableDemo;