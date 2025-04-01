import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function CategoryNav ({ defaultActiveKey, workData }) {
    const [defaultKey, setDefaultKey] = useState(defaultActiveKey);

    
    return (
        
        <Nav className="category-nav" variant="underline" defaultActiveKey={defaultKey}>
            {
                workData.map(category => 
                    <Nav.Item>
                        <Nav.Link eventKey={category.suffix} href={`/#/Works/${category.suffix}`}>
                            <h6>{category.name}</h6>
                        </Nav.Link>
                    </Nav.Item>
                )
            }
            
        </Nav>
    );
};



export default CategoryNav;