import React from 'react';
// This is going to display a bunch of components that 
// individually load info from farms

export default function Browse() {
    return(
        <div className='browse-wrapper'>
            <div className='farm-box'>
                <h3>Willow Creek Farm</h3>
                <h5>Maple Valley, WA</h5>
                <h5>Methods: Permaculture</h5>
                <h5>Certified Organic: Yes</h5>
                <h5>Products: Vegetables, Dairy</h5>
                <a href='#'>View CSA Details</a>
            </div>
            <div className='farm-box'>
                <h3>Duvall Family Farm</h3>
                <h5>Duvall, WA</h5>
                <h5>Methods: Permaculture</h5>
                <h5>Certified Organic: No</h5>
                <h5>Products: Vegetables, Eggs, Pork, Honey</h5>
                <a href='#'>View CSA Details</a>
            </div>
        </div>
    )
}