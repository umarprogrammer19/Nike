import Content from "@/components/contact/content"
import Sidebar from "@/components/contact/sidebar"

const Contact = () => {
  return (
    <div className="max-w-[1344px] m-auto p-3 py-14 h-full">
        <div className="w-full md:flex items-start h-full">
            <Content />
            <Sidebar />
        </div>
    </div>
  )
}

export default Contact