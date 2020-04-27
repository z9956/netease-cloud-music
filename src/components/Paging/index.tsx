import React, { FC } from 'react';

type PagingComponentPropType = {
  total: number,
  checkIndex: number,
  onChangeComments: (index: number) => void
};
import './style.scss';

const Paging: FC<PagingComponentPropType> = props => {
  const { total, onChangeComments, checkIndex } = props;
  const first = () => <div className={ checkIndex === 1 ? 'active' : '' } onClick={ () => onChangeComments(1) }>1</div>;
  const last = () => <div className={ checkIndex === total ? 'active' : '' } onClick={ () => onChangeComments(total / 20 ) }>{ Math.floor(total / 20) }</div>;

  const getPageNum = () => {
    const nums: number[] = [];
    const numEle = (firstShow?: number, lastShow?: number) => {
      return (
          <>
            { firstShow ? <>{ first() }...</> : first() }
            {
              nums.map((num: number, index: number) => {
                return <div className={ num === checkIndex ? 'active' : ''  } key={ index } onClick={ () => onChangeComments(num) }>{ num }</div>;
              })
            }
            { lastShow ? <>...{ last() }</> : last() }
          </>
      );
    };
    
    if(checkIndex < 8) {
      checkIndex !==1 && nums.push(checkIndex);
      for(let i = 0; i < 6; i++) {
        nums.push(checkIndex + 1 + i);
      }
      return checkIndex !== 1 ? numEle(1, 1) : numEle(0, 1);
    }else if(total - checkIndex <= 8 || total - checkIndex === 0) {
      checkIndex !== total && nums.push(checkIndex);
      for(let i = 0; i < 6; i++) {
        nums.unshift(checkIndex - 1 - i);
      }
      return numEle(1, 0);
    }else if(checkIndex - 8 > 1 && checkIndex + 8 < total){
      nums.push(checkIndex);
      for ( let i = 0; i < 3; i++ ) {
        nums.push(checkIndex + 1 + i);
      }

      for ( let i = 0; i < 3; i++ ) {
        nums.unshift(checkIndex - 1 - i);
      }
      return numEle(1, 1);
    }
  };

  return (
      <div className="paging-wrap">
        <button className="up-page" onClick={ () => onChangeComments( checkIndex - 1) } disabled={ checkIndex <= 1 }>上一页</button>
        <div className="num">
          {
            getPageNum()
          }
        </div>
        <button className="next-page" onClick={ () => onChangeComments( checkIndex + 1) } disabled={ checkIndex >= total }>下一页</button>
      </div>
  );
};

export default Paging;