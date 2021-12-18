import Menu from '@/components/Menu/menu'
function Layout(props: any) {
  return <>
    <Menu />
    <main>
      {props.children}
    </main>
  </>
}

export default Layout