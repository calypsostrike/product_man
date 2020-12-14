import React, { useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';
import ProductForm from '../components/ProductForm';

export default () => {
    return (
        <div>
            <h1>Enter New User</h1>
           <PersonForm/>
           <h2>Enter New Product</h2>
           <ProductForm />
        </div>
    )
}