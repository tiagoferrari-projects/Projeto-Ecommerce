import React from 'react';
import banner from '../../assets/horizon_promotion.png';
import './index.scss';

const PromotionCard = () => {
    return (
        <div className='PromotionCard'>
            <img src={banner} alt="Promotion Game" />
        </div>
    )
}

export default PromotionCard