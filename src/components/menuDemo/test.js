import React,{ Component } from 'react';
import { Slider } from 'antd';
import 'antd/dist/antd.css';
import { Card, Col, Row, Collapse  } from 'antd';
const { Meta } = Card;
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

class Test extends Component {
  gutters = {};
  colCounts = {};
  constructor() {
    super();
    this.state = {
      gutterKey: 1,
      colCountKey: 2,
    };
    [8, 16, 24, 32, 40, 48].forEach((value, i) => { this.gutters[i] = value; });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => { this.colCounts[i] = value; });
  }
  onGutterChange = (gutterKey) => {
    this.setState({ gutterKey });
  }
  onColCountChange = (colCountKey) => {
    this.setState({ colCountKey });
  }
  render() {
    const { gutterKey, colCountKey } = this.state;
    const cols = [];
    const colCount = this.colCounts[colCountKey];
    
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / colCount}>
           <Collapse defaultActiveKey={['1']} onChange={callback}>
              <Panel header="This is panel header 1" key="1" >
                 <Card
                  hoverable
                  style={{ width: 240 }}
                  extra={<a href="#">More</a>}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>  
              </Panel>
            </Collapse>
        </Col>
      );
      
    }
    return (
      <div>
       
        <Row gutter={this.gutters[gutterKey]}>{cols}</Row>
        
      </div>
    );
  }
}

export default Test;