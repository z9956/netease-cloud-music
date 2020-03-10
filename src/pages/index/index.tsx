import React,{ Component } from 'react';

import './style.scss';
import a from '@/static/images/galsang.png';

export default class Demo extends Component<any, any>{
    render() {
        return (
            <div className='list'>
                测试
                <img width='40' height='40' src={a} alt=""/>
            </div>
        );
    }
}
