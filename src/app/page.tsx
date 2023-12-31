'use client'
import styles from './page.module.css'
import MainMenu from '../components/mainMenu';

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.centerBlock}>
        <MainMenu />
        <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontWeight: 'bold' }}>
            Добро пожаловать на наш веб-сервис для шифрования, кодирования и генерации паролей!
          </div>

          <div>
            Наши инструменты предоставляют вам множество возможностей для обработки данных и обеспечения их конфиденциальности. Ниже вы найдете краткое описание каждой доступной функции.
          </div>

          <div style={{ fontWeight: 'bold' }}>
            1. Онлайн Шифры:
          </div>

          <div>
            Наши онлайн шифры помогут вам зашифровать и расшифровать текст с помощью различных методов шифрования. Мы предлагаем широкий выбор шифров, включая:
          </div>

          <div>
            &bull; <span style={{ fontWeight: 'bold' }}>Шифр Цезаря:</span> Простой шифр, который сдвигает буквы на заданное количество позиций.
          </div>
          <div>
            &bull; <span style={{ fontWeight: 'bold' }}>Шифр Хилла:</span> Полиалфавитный шифр, использующий ключ для шифрования сообщений.
          </div>
          <div>
            &bull; <span style={{ fontWeight: 'bold' }}>Шифр Виженера:</span> Шифр, который использует ключевое слово или фразу для повторяющегося шифрования текста.
          </div>
          <div>
            &bull; <span style={{ fontWeight: 'bold' }}>Шифр Атбаш:</span> Шифр, который заменяет каждую букву на её обратную по алфавиту.
          </div>
          <div>
            &bull; <span style={{ fontWeight: 'bold' }}>Шифр A1Z26:</span> Шифр, который каждой букве алфавита присваивает числовое значение, а затем кодирует текс, заменяя буквы их соответствующими числами.
          </div>

          <div style={{ fontWeight: 'bold' }}>
            2. Кодирование и декодирование:
          </div>

          <div>
            Наши инструменты также позволяют вам кодировать и декодировать данные. Включая:
          </div>

          <div>
            &bull; <span style={{ fontWeight: 'bold' }}>Base64 Преобразование:</span> Кодируйте текст или данные в формат Base64 и декодируйте их обратно.
          </div>

          <div>
            &bull; <span style={{ fontWeight: 'bold' }}> Код Хаффмана:</span> Сжатие и декодирование данных с использованием алгоритма Хаффмана.
          </div>

          <div style={{ fontWeight: 'bold' }}>
            3. Генерация паролей:
          </div>

          <div>
            Наш сервис также предоставляет удобный инструмент для генерации сильных и надежных паролей. Вы можете выбрать параметры генерации, такие как длина пароля и включение специальных символов.
          </div>

          <div style={{ fontWeight: 'bold' }}>
            Как это работает:
          </div>

          <div>
            Выберите нужный инструмент из меню навигации.
          </div>
          <div>
            Введите данные, которые вы хотите зашифровать, закодировать, декодировать или используйте настройки для генерации пароля.
          </div>

          <div>
            Нажмите кнопку `Выполнить` или `Сгенерировать` в зависимости от выбранного инструмента.
          </div>

          <div>
            Результат будет отображен на экране. Вы также можете скопировать его в буфер обмена для удобства.
          </div>

          <div style={{ fontWeight: 'bold' }}>
            Безопасность и Конфиденциальность:
          </div>

          <div>
            Мы придерживаемся высших стандартов безопасности и конфиденциальности. Наши сервисы работают в браузере, и мы не храним или записываем ваши данные.
          </div>

          <div style={{ fontWeight: 'bold' }}>
            Начните использовать наши инструменты прямо сейчас и обеспечьте безопасность и надежность вашей информации!
          </div>

          <div>
            <i>Примечание: Пожалуйста, помните о законах и нормах безопасности при использовании шифрования и кодирования для любых данных.</i>
          </div>
        </div>
      </div>
    </main>
  )
}
