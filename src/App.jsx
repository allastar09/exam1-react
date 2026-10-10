import './App.css';
import food from './img/porapoest-top 1.png';
import Section from './hands';
import Premium from './premium';
import Servis from './servis';
import Todo from './todolist';

import hand from './img/Group.svg';
import hand2 from './img/Frame(1).svg';
import food1 from './img/image_1_1.png';
import shef from './img/Group 39.png'
import cart from './img/image 2.svg'

function App() {
  const servis = [{
    
  }]
  return (
    <div className="bg-[#FAF6F2]">

      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <h2 className="text-[50px] font-bold w-[700px]">
            Доставка прогрессивного питания для гурманов
          </h2>

          <div className="flex items-center justify-center gap-[20px] mt-[60px] mr-[450px]">
            <button className="w-[203px] h-[48px] bg-[#4D8F76] text-white rounded-[60px]">
              Подобрать питание
            </button>

            <button className="w-[203px] h-[48px] bg-[#FAF6F2] text-[#4D8F76] border-2 border-[#4D8F76] rounded-full">
              Получить консультацию
            </button>
          </div>
        </div>

        <div>
          <img src={food} alt="Еда" />
        </div>
      </div>

      <Section
        title="Еда, которая сделает тебя лучше!"
        text="Мы помогаем создавать новое качество жизни для наших клиентов, чтоб каждый человек был счастливым, здоровым и не отвлекался на рутинные процессы. Для этого мы создали новый уникальный продукт на рынке доставки еды и приглашаем вас окунуться в гастрономический шик уже сегодня."
        img={hand}
      />

      <Section
        title="Изысканное меню высокой кухни"
        img={hand2}
        reverse={true}
        text="В наших блюдах мы продумали каждую деталь, все ингредиенты тщательно подобраны и создают неповторимый вкус. Качественные продукты, деликатесы и суперфуды помогают поддерживать здоровье и обмен веществ."
      />

      <div className="w-[98%] bg-[#E2DDC0] min-h-[209px] rounded-[40px] p-[30px] mx-auto my-8">
        <h1 className="text-[40px] ml-[60px]">
          Подберите рацион для своих целей
        </h1>

        <div className="flex flex-wrap justify-evenly items-center gap-4 mt-[30px]">
          <div className="w-[150px] h-[48px] bg-[#FAF6F2] rounded-2xl p-4">
            Ваш вес
          </div>

          <div className="w-[150px] h-[48px] bg-[#FAF6F2] rounded-2xl p-4">
            Ваш рост
          </div>

          <div className="w-[150px] h-[48px] bg-[#FAF6F2] rounded-2xl p-4">
            Ваш возраст
          </div>

          <div className="w-[150px] h-[48px] bg-[#FAF6F2] rounded-2xl p-4">
            Активность
          </div>

          <button className="w-[203px] h-[48px] bg-[#4D8F76] text-white rounded-[60px]">
            Рассчитать рацион
          </button>
        </div>
      </div>

      <Premium
        food1={food1}
        food2={food1}
        food3={food1}
        food4={food1}
        footerTitle="Будем доставлять наборы каждый день."
        footerText="Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала — 2 часа."
      />

      <Servis
      img={shef}
      text='Меню из 90 блюд на две недели без повтора'
      />

      <div className='ml-[400px] mt-[30px]  '>
        <img src={cart} alt="" />
      </div>

    <div>
      <h1 className='text-[50px] mt-[70px] ml-[100px] font-bold'>Частые вопросы</h1>
      <div className='flex flex-col gap-y-[50px] ml-[200px] mt-[50px]'>
        <div className='w-[80%] h-[90px] bg-[white] rounded-2xl flex justify-between p-[20px] items-center'>
          <h1 className='font-bold text-2xl'>Как я могу оплатить заказ?</h1>
          <p className='font-bold text-6xl'>↓</p>
        </div>
         <div className='w-[80%] h-[90px] bg-[white] rounded-2xl flex justify-between p-[20px] items-center'>
          <h1 className='font-bold text-2xl'>Могу ли я изменить адрес и время доставки?</h1>
          <p className='font-bold text-6xl'>↓</p>
        </div>
         <div className='w-[80%] h-[90px] bg-[white] rounded-2xl flex justify-between p-[20px] items-center'>
          <h1 className='font-bold text-2xl'>Могу ли я перенести день доставки?</h1>
          <p className='font-bold text-6xl'>↓</p>
        </div>
         <div className='w-[80%] h-[90px] bg-[white] rounded-2xl flex justify-between p-[20px] items-center'>
          <h1 className='font-bold text-2xl'>Могу ли я приостановить доставку, на какой срок?</h1>
          <p className='font-bold text-6xl'>↓</p>
        </div>
      </div>
    </div>

    <div className='w-[96%] h-[161px] bg-[#B89683] rounded-3xl m-auto mt-[70px] flex justify-between items-center p-[20px]'>
    <h1 className='text-[white] text-6xl'>Будьте всегда в курсе!</h1>
    <div className='flex gap-[20px] mr-[60px]'>
      <input type="email" className='border bg-[white] p-[10px] rounded-2xl' />
      <button className="w-[203px] h-[48px] bg-[#4D8F76] text-white rounded-[60px]">Подписаться</button>
    </div>
    </div>

    {/* Вакти тудушка зани мазама мегрозона хози и тудушка бл */}
    
    <div>

    </div>
        <Todo/>
    </div>
  );
}

export default App;