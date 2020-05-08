import React, { FC } from 'react';

type PagingComponentPropType = {
  total: number,
  checkIndex: number,
  pageIng?: number,
  onChangeComments: (index: number) => void
};
import './style.scss';

const Paging: FC<PagingComponentPropType> = props => {
  const { total, onChangeComments, checkIndex, pageIng } = props;
  const first = () => <div className={ checkIndex === 1 ? 'active' : '' } onClick={ () => onChangeComments(1) }>1</div>;
  const last = (page: number = 20) => <div className={ checkIndex === (total / page) ? 'active' : '' }
                                           onClick={ () => onChangeComments(total / page) }>{ Math.floor(total / page) }</div>;

  const getPageNum = () => {
    let nums: number[] = [];
    const numEle = (firstShow?: number, lastShow?: number) => {
      return (
        <>
          { firstShow ? <>{ first() }...</> : first() }
          {
            nums.map((num: number, index: number) => {
              return <div className={ Math.floor(num) === Math.floor(checkIndex) ? 'active' : '' } key={ index }
                          onClick={ () => onChangeComments(num) }>{ Math.floor(num) }</div>;
            })
          }
          { lastShow ? <>...{ last(pageIng ? pageIng : 20) }</> : '' }
        </>
      );
    };

    const page: number = pageIng ? pageIng : 20;
    if (checkIndex <= 9) {
      checkIndex !== 1 && nums.push(checkIndex);
      for (let i = 0; i < 6; i++) {
        nums.push(checkIndex + 1 + i);
      }
      return checkIndex !== 1 ? numEle(1, 1) : numEle(0, 1);
    } else if ((total / page) - checkIndex < 7) {
      checkIndex !== (total / 20) && nums.push(checkIndex);
      for (let i = 0; i < 6; i++) {
        nums.unshift(checkIndex - 1 - i);
      }
      return numEle(1, 0);
    } else if (checkIndex - 4 > 1 && checkIndex + 4 < total) {
      nums.push(checkIndex);
      for (let i = 0; i < 3; i++) {
        nums.push(checkIndex + 1 + i);
      }

      for (let i = 0; i < 3; i++) {
        nums.unshift(checkIndex - 1 - i);
      }
      return numEle(1, 1);
    }
  };

  return (
    <div className="paging-wrap">
      <button className="up-page" onClick={ () => onChangeComments(checkIndex - 1) } disabled={ checkIndex <= 1 }>上一页
      </button>
      <div className="num">
        {
          getPageNum()
        }
      </div>
      <button className="next-page" onClick={ () => onChangeComments(checkIndex + 1) }
              disabled={ checkIndex >= (total / (pageIng ? pageIng : 20)) }>下一页
      </button>
    </div>
  );
};

export default Paging;