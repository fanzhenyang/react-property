import Menu from '@/components/Menu/menu'
function Layout(props: any) {
  return <>
    <Menu />
    {props.children}
  </>
}

export default Layout