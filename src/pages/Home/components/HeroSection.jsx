import DownloadIcon from './../../../components/icons/DownloadIcon';
import PlayIcon from './../../../components/icons/PlayIcon';
import HeroImage from './../../../assets/images/vihcle-1.jpg';

const HeroSection = () => {
    return (
        <>
        <div className='min-h-screen flex justify-evenly items-center p-10 flex-wrap gap-10 pt-25'>
            <div className="text max-w-md">
                <h1 className='text-5xl leading-16 mb-3'><span style={{color: "var(--primary-color)"}}>WEBC </span>لحلول الطاقة</h1>
                
                <p className='leading-8 mb-3 text-justify'>هي شركة رائدة في مجال الطاقة والبنية التحتية، تأسست بهدف توفير حلول متكاملة وعالية الجودة في مجالات الطاقة، المياه، والمعدات الثقيلة. نحن نعمل على مستوى عالمي، ونقدم خدماتنا لعملائنا في مختلف القطاعات، بدءًا من القطاع الصناعي وحتى القطاع الحكومي والخاص.</p>
                <div>
                    <a href="#" className='btn ml-2 mb-2'> عرض الخدمات</a>
                    <a href="#" className='btn btn-reverse'> تواصل معنا</a>
                </div>
            </div>

            <img src={HeroImage} className='min-w-50 max-w-md rounded-2xl shadow-2xl' alt="استمتع بتجربة رقمية متطورة، حيث نجمع بين التقنية وسهولة الاستخدام لتقديم أفضل تجربة للمستخدم!"  />
        </div>
        </>
    )
}

export default HeroSection;