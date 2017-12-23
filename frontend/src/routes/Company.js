import React from 'react';
import './Company.css';
import Card from '../components/Card';
import axios from 'axios';

class Company extends React.Component{
    
    constructor(){
        super();
        
        this.state={
            companyArray:[/*
                { recruit:"보안 솔루션 담당자",company:"GS SHOP",rebate:1000000,recom:11,favorite:0 },
                { recruit:"Web Frontend",company:"망고플레이트",rebate:1000000,recom:36,favorite:1 }*/
            ]
        }
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

    render(){
        const {companyArray}=this.state;
        
        const list=companyArray.map((v)=>{
            return (
                <Card 
                    key={v.id}
                    recruit={v.recruit}
                    company={v.name}
                    rebate={v.rebate}
                    recom={v.recommendation}
                    favorite={v.favorite}
                />
            )
        });
        
        return(
            <div>
                <div className="list">
                    {list}
                </div>
            </div>
        )
    }
}

export default Company;