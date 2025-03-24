import HeadSetIcon from './../../../components/icons/HeadSetIcon';
import HolesIcon from './../../../components/icons/HolesIcon';
import ToolBoxIcon from './../../../components/icons/ToolBoxIcon';
import PeiceIcon from './../../../components/icons/PeiceIcon';
import ChoosenCard from './ChoosenCard';

const ChoosenSection = () => {
    const cards = [
        { id: 1, title: "حفر الآبار الارتوازية", description: "حفر الآبار وتقييم مصادر المياه وصيانة الآبار" , icon: <HolesIcon color="var(--primary-color)" />},
        { id: 2, title: "بيع المعدات الثقيلة ", description: "بيع المعدات الثقيلة وتقديم خدمات ما بعد البيع", icon: <ToolBoxIcon color="var(--primary-color)" /> },
        { id: 3, title: "بيع قطع الغيار للمعدات", description: "نقدم قطع غيار أصلية وعالية الجودة لجميع أنواع المعدات الثقيلة", icon: <PeiceIcon color="var(--primary-color)" /> },
        { id: 4, title: "خدمات الصيانة والدعم", description: "خدمات صيانة شاملة بالإضافة إلى تقديم الدعم الفني", icon: <HeadSetIcon color="var(--primary-color)" /> }
    ];

    return (
        <div className='p-10 flex justify-center gap-7 items-center flex-wrap'>
            <h1 className="text-center w-full text-2xl">خدماتنا - Our Services</h1>
            {
                cards.map((card) =>
                    <ChoosenCard key={card.id} title={card.title} desc={card.description} icon={card.icon} />
                )
            }
        </div>
    )
}

export default ChoosenSection;