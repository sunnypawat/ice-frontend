import Image from 'next/image'
import CourseBanner from '@/component/courseMain/courseBanner'

export default function Course() {
  return (
    <div id="home">
        <h1>Course Selection</h1>
        <p>Select some trading and investment courses</p>
        <CourseBanner 
          title='What is investment?' 
          description='The  great opportunity for you to understand fundamental and technical technique for investing' 
          level='Level 1: Basic' 
          access={true}
        />
    </div>
  )
}