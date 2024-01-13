
import {UnorderedListOutlined} from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';


const items = [
    
    {
        
        label: (
            <Button 
            className={({ isActive }) =>

            ` ${isActive ? "active-link" : ""}`
        }>
                Home
            </Button>
        ),
        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Button  className={({ isActive }) =>

            ` ${isActive ? "active-link" : ""}`
        }>
                About
            </Button>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Button  className={({ isActive }) =>

            ` ${isActive ? "active-link" : ""}`
        }>
                Portfolio
            </Button>
        ),
        key: '3',

    },
    {
        type: 'divider',
    },
    {
        label: (
            <Button  className={({ isActive }) =>

            ` ${isActive ? "active-link" : ""}`
        }>
                contact
            </Button>
        ),
        key: '4',

    },

];
const DropdownBtn = () => (
    <Dropdown
    style={{width: "1000px"}}
      menu={{
        items,
      }}
      trigger={['click','hover']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space >
          <div className='nav-link-dropdown'>
          <UnorderedListOutlined />
          </div>
        </Space>
      </a>
    </Dropdown>
  );

  export default DropdownBtn;