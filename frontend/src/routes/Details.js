import React from 'react';
import './Details.css';
import axios from 'axios';

class Details extends React.Component{
    
    constructor(){
        super();
        
        this.state={
            details:null,
        }
    }
    
    componentDidMount(){
        
        const company_id=this.props.match.params.id;
                // +기호를 사용하지않고 중간에 문자열변수 넣는 es6방식
        axios.get(`http://localhost:4000/company/${company_id}`)
        .then((response)=>{
            //console.log(response.data);
            this.setState({ details:response.data });
        });
    }
    
    render(){
        const {details}=this.state;
        
        return(
            <div className="details">
                <div className="left">
                    <div className="photo"></div>
                    <div className="desc">
                        <div className="desc_info">
                            <h2>{details && details.recruit}</h2>
                            <div>{details && details.name}</div>
                        </div>
                        <div className="desc_body">
                            {details && details.name} 채용상세내용
                        </div>
                    </div>
                </div>
                <div className="right">
                    {details && details.recommedation} 추천
                </div>
            </div>
        )
    }
}

export default Details;