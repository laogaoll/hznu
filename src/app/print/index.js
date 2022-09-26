import React from 'react'
import { inject } from 'mobx-react'
import { Form,Spin,Button } from 'antd'
import './index.less'
import * as urls from 'constant/urls'

@inject('mainStore') //将mainStore中的数据注入当前组件
class print extends React.Component{
    constructor(props) {
        super(props)
        this.store = this.props.mainStore
        this.state = {
            loading: false,
        }
      }
    //导出为docx
    Export = async()=>{
         let r = await this.props.mainStore.get(urls.API_EXPORT );
          window.open(r.data);
    }
      doExport = async()=>{
            this.Export();
      }
     render(){
        
        return(
            <Spin spinning={this.state.loading}>
            <Button type="primary" onClick={this.doExport}>导出DOCX</Button>  
            </Spin>
        )
       
     }
}
export default Form.create()(print);
