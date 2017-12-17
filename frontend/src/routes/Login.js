import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

import './Login.css';

class Login extends React.Component{
    
    constructor(){
        super();
        
        this.state={
            username:'',
            userpass:''
        }
    
        this.handleUserName=this.handleUserName.bind(this);
        this.handleUserPass=this.handleUserPass.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleUserName(e){
        this.setState({username:e.target.value});
    }
    
    handleUserPass(e){
        this.setState({userpass:e.target.value});
    }
    
    handleSubmit(){
        axios.post('http://localhost:4000/login',{
            username:this.state.username, 
            userpass:this.state.userpass})
        .then((response)=>{
            let {success, error}=response.data;
            let {history}=this.props;
            if(success===1){
                // 뒤로 가기를 사용하기 위해 this.props.history.push 사용(라우터들 간의 이동)
                history.push('/company');
            }else if(success===2){
                history.push('/register');
            }else if(error===-1){
                return;
            }
        });
    }
    
    render(){
        return(
            <div className="login-bg">
                <div className="login">
                    <Form>
                        <Form.Field>
                          <label>User Name</label>
                          <input placeholder='User Name' onChange={this.handleUserName}/>
                        </Form.Field>
                        <Form.Field>
                          <label>User Password</label>
                          <input placeholder='User Password' onChange={this.handleUserPass}/>
                        </Form.Field>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Form>   
                </div>
            </div>
        )
    }
}

export default Login;