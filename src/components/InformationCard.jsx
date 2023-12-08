import React from 'react';
import Row from '../Row';

const InformationCard = ({ data, buttons }) => {
    return (
        <div className={`p-2 border-2 shadow-lg border-gray-200 inline-block rounded-xl bg-blue-50 w-full`}>
            <Row justifyContent='space-between' width='100%'>
                <div className='mr-2 pr-2'>
                    {data}
                </div>
                <div className='ml-2'>
                    {buttons}
                </div>
            </Row>
        </div>
    );
};

export default InformationCard;
