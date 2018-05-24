import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, Col, Row, Collapse,Tooltip, Icon  } from 'antd';
import 'ant-design-pro/dist/ant-design-pro.css';
import { ChartCard, MiniBar } from 'ant-design-pro/lib/Charts';

const visitData = [
  {
    x: "2017-09-01",
    y: 100
  },
  {
    x: "2017-09-02",
    y: 120
  },
  {
    x: "2017-09-03",
    y: 88
  },
  {
    x: "2017-09-04",
    y: 65
  }
];

const { Meta } = Card;
const Panel = Collapse.Panel;

function callback(key){
  console.log(key);
  
}
/*function handleClick = (e) => {
    console.log('click ', e);
     
    
  }*/

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
class CardLayout extends Component {
   
  render() {
    return(
      
            
      <div style={{ background: '#ECECEC' }}>
        
          <Col span={8}>
          <Collapse defaultActiveKey={['3']} onChange={callback}>
            <Panel header="This is panel header 3" key="3">
                <ChartCard
                    title="支付笔数"
                    action={
                      <Tooltip title="支付笔数反应交易质量">
                        <Icon type="exclamation-circle-o" />
                      </Tooltip>
                    }
                    total="6,500"
                    
                  >
                    <MiniBar  data={visitData} />
              </ChartCard>
            </Panel>
          </Collapse>
               
          </Col>
          <Col span={8}>
             
               <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>  
           
          </Col>
          <Col span={8}>
          <Collapse defaultActiveKey={['3']} onChange={callback}>
            <Panel header="This is panel header 3" key="3">
               <Card
                hoverable
                style={{ width: 240 }}
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
          <Col span={8}>
            <Collapse defaultActiveKey={['4']} onChange={this.handleClick}>
              <Panel header="This is panel header 4" key="4">
                 <Card
                  hoverable
                  style={{ width: 240 }}
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
          <Col span={8}>
             <Collapse defaultActiveKey={['5']} onChange={callback}>
            <Panel header="This is panel header 5" key="5">
               <Card
                hoverable
                style={{ width: 240 }}
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
          <Col span={8}>
          <Collapse defaultActiveKey={['6']} onChange={callback}>
            <Panel header="This is panel header 6" key="6">
               <Card
                hoverable
                style={{ width: 240 }}
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
      
      </div>
    
    )
  };
}
export default CardLayout;