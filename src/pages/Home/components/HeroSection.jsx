import DownloadIcon from './../../../components/icons/DownloadIcon';
import PlayIcon from './../../../components/icons/PlayIcon';
import HeroImage from './../../../assets/images/hero-section-image.png';

const HeroSection = () => {
    return (
        <>
        <div className='min-h-screen flex justify-evenly items-center p-10 flex-wrap gap-10 pt-25'>
            <div className="text max-w-md">
                <h1 className='text-5xl leading-16'>مرحباً بك في عالم  <span style={{color: "var(--primary-color)"}}>تطبيق ديجيتال</span>
                </h1>
                <p className='leading-8'>استمتع بتجربة رقمية متطورة، حيث نجمع بين التقنية وسهولة الاستخدام لتقديم أفضل تجربة للمستخدم!</p>
                <div>
                    <a href="#" className='btn ml-2 mb-2'><DownloadIcon color="#fff" /> تحميل التطبيق</a>
                    <a href="#" className='btn btn-reverse'><PlayIcon color="var(--primary-color)" /> تحميل التطبيق</a>
                </div>
            </div>

            <img src={HeroImage} className='min-w-50 max-w-md rounded-2xl shadow-2xl' alt="استمتع بتجربة رقمية متطورة، حيث نجمع بين التقنية وسهولة الاستخدام لتقديم أفضل تجربة للمستخدم!"  />
        </div>
        </>
    )
}

export default HeroSection;