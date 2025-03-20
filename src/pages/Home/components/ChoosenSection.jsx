import PaintBrushIcon from './../../../components/icons/PaintBrushIcon';
import BoltIcon from './../../../components/icons/BoltIcon';
import ShieldIcon from './../../../components/icons/ShieldIcon';
import HeadSetIcon from './../../../components/icons/HeadSetIcon';
import ChoosenCard from './ChoosenCard';

const ChoosenSection = () => {
    const cards = [
        { id: 1, title: "تصميم عصري وأنيق", description: "تجربة مستخدم محسّنة وسهلة التنقل" , icon: <PaintBrushIcon color="var(--primary-color)" />},
        { id: 2, title: "سرعة وكفاءة عالية", description: "لا مزيد من التباطئ والتأخير", icon: <BoltIcon color="var(--primary-color)" /> },
        { id: 3, title: "حماية وأمان متكامل", description: "بياناتك محمية بأحدث معايير التشفير", icon: <HeadSetIcon color="var(--primary-color)" /> },
        { id: 4, title: "دعم فني متواصل", description: "متواجدون لمساعدتك على مدار الساعة", icon: <ShieldIcon color="var(--primary-color)" /> }
    ];

    return (
        <div className='p-10 flex justify-center gap-7 items-center flex-wrap'>
            <h1 className="text-center w-full text-2xl">لماذا تختار تطبيق ديجيتال؟</h1>
            {
                cards.map((card) =>
                    <ChoosenCard key={card.id} title={card.title} desc={card.description} icon={card.icon} />
                )
            }
        </div>
    )
}

export default ChoosenSection;