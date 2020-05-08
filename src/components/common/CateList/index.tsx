import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getDjCateList } from '@/apis/djradio';
import { categoriesType } from '@/types/djradio';
import { categoriesInit } from '@/utils/initialState';

import './style.scss';

type CateListComponentPropType = {};

const CateList: FC<CateListComponentPropType> = () => {
  const [ categories, setCategories ] = useState<{
    first: Array<categoriesType>,
    last: Array<categoriesType>
  }>({
    first: [ categoriesInit ],
    last: [ categoriesInit ]
  });
  const [ checkIndex, setIndex ] = useState<number>(-1);
  const [ radiusIndex, setRadiusIndex ] = useState<number>(0);

  const mapData = (data: Array<categoriesType>) => {
    if (!data) return;
    return (
      <ul className="categories-wrap">
        {
          data.map((item: categoriesType, index: number) => {
            return <li key={ item.id } className={ checkIndex === index ? 'check' : '' }
                       onClick={ () => setIndex(index) }>
              <Link to={ `/discover/djradio/category?id=${ item.id }` }>
                <div className={ checkIndex === index ? 'check' : '' }
                     style={ { backgroundImage: `url(${ item.picWebUrl })` } }></div>
                <em>{ item.name }</em>
              </Link>
            </li>;
          })
        }
      </ul>
    );
  };

  const handleChangeIndex = (index: number) => {
    setRadiusIndex(index);
  };

  useEffect(() => {
    let flag = false;

    (async function () {
      const res = await getDjCateList();
      if (!flag && res.data.code === 200) {
        const { categories } = res.data;

        const first = categories.splice(0, 18);
        const last = categories;
        setCategories({ first, last });
      }
    })();

    return () => {
      flag = true;
    };
  }, []);

  const { first, last } = categories;

  return (
    categories && <div>
      <div className="categories">
        { radiusIndex === 0 ? mapData(first) : mapData(last) }
      </div>
      <div className="radius">
        {
          [ 0, 1 ].map(index => {
            return <span key={ index } className={ radiusIndex === index ? 'active' : '' }
                         onClick={ () => handleChangeIndex(index) }></span>
          })
        }
      </div>
    </div>
  );
};

export default CateList;