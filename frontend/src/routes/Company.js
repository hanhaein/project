import React from 'react';
import './Company.css';
import Card from '../components/Card';
import axios from 'axios';

class Company extends React.Component{
    
    constructor(){
        super();
        
        this.state={
            companyArray:[/*{ recruit:"보안 솔루션 담당자",company:"GS SHOP",rebate:1000000,recom:11,favorite:0 },
                            { recruit:"Web Frontend",company:"망고플레이트",rebate:1000000,recom:36,favorite:1 }*/],
            type:'전체'
        }
        
        this.handleClick=this.handleClick.bind(this);
        this.handleCategory=this.handleCategory.bind(this);
    }
    
    componentDidMount(){
        axios.get('http://localhost:4000/company')
        .then((response)=>{
            //console.log(response.data);
            const data=this.state.companyArray.concat(response.data.company);
            this.setState({ 
                companyArray : data
            });
        });
    }

    handleClick(company_id){
        //console.log(company_id);
        this.props.history.push(`/company/${company_id}`);
    }
    
    handleCategory(e){
        this.setState({ type : e.target.innerHTML });
    }
    
    render(){
        const {companyArray,type}=this.state;
        
        const newArray=companyArray.filter((v)=>{
            if(type==='전체'){
               return v;
            }
            return v.type===type;
        });
              
        const list=newArray.map((v)=>{
            return (
                <Card 
                    cardLink={this.handleClick}
                    key={v.id}
                    recruit={v.recruit}
                    company_id={v.id}
                    company={v.name}
                    rebate={v.rebate}
                    recom={v.recommendation}
                    favorite={v.favorite}
                />
            )
        });
        
        return(
            <div>
                <ul className="category">
                    <li onClick={this.handleCategory}>전체</li>
                    <li onClick={this.handleCategory}>프론트엔드개발자</li>
                    <li onClick={this.handleCategory}>백엔드개발자</li>
                    <li onClick={this.handleCategory}>앱개발자</li>
                </ul>
                <div className="list">
                    {list}
                </div>
            </div>
        )
    }
}

export default Company;