import { Layout, Menu, Icon } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Sider, Content, Footer } = Layout;

class SystemLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Header>
                    <HeaderLayout>
                        <Logo></Logo>
                        <Menu theme='dark' mode='horizontal' style={{ lineHeight: '64px' }}>
                            <MenuItem key='1'>nav 1</MenuItem>
                            <MenuItem key='2'>nav 2</MenuItem>
                            <MenuItem key='3'>nav 3</MenuItem>
                        </Menu>
                    </HeaderLayout>

                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <SiderLayout>
                            <Menu mode='inline' style={{ height: '100%' }}>
                                <SubMenu title={
                                    <span>
                                        <Icon type="mail" />
                                        <span>Navigation One</span>
                                    </span>
                                }>
                                    <MenuItem key='1'>option1</MenuItem>
                                    <MenuItem key='2'>option1</MenuItem>
                                    <MenuItem key='3'>option1</MenuItem>
                                    <MenuItem key='4'>option1</MenuItem>
                                </SubMenu>
                            </Menu>
                        </SiderLayout>

                    </Sider>
                    <Content>content</Content>
                </Layout>
            </Layout>
        )
    }
}

export default SystemLayout;

const Logo = styled.div`
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 28px;
    float: left;
`

const HeaderLayout = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    height: 64px
`

const SiderLayout = styled.div`
    position: fixed;
    top: 64px;
    left: 0;
    bottom: 0;
`