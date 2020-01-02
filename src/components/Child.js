import React from 'react';

type Props = {
    myProp: String,
}

const Child = ({ myProp }: Props) => (
    <div>
        { myProp }
    </div>
)

export default Child;
