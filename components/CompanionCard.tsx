import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps{
  id:string;
  name:string;
  topic:string;
  duration:number;
  color: string;
  subject: string;
}
const CompanionCard = ({id,name,topic,duration,color,subject}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{backgroundColor:color}}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image src='/icons/bookmark.svg'  alt="Bookmark" width={12.5} height={15}/>
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">Topic: {topic}</p>
      <div className="flex items-center gap-2">
        <Image src='icons/clock.svg' alt="duration" width={13.5} height={13.5}/> 
        <p className="text-sm"> {duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className='width-full'>
      <button className="btn-primary w-full justify-center bg-[#FE5933]"> Launch Lesson </button>
      </Link>

    </article>
  )
}

export default CompanionCard