import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={()=>setModalOpened(false)}
    >
        <form action="" className="infoForm">
                <h3>Your info</h3>
                <div>
                        <input type="text" className="infoInput"  name='FirstName' placeholder='Имя'/>
                        <input type="text" className="infoInput"  name='LastName' placeholder='Фамилия'/>

                </div>
                <div>
                <input type="text" className="infoInput"  name='worksAt' placeholder='Работаю в отделе'/>
                </div>
                <div>
                    <input type="text" className="infoInput"  name='livesIn' placeholder='Проживаю в'/>
                    <input type="text" className="infoInput"  name='LastName' placeholder='Городе'/>
                </div>
                <div>
                    <input type="text" className="infoInput"  name='worksAt' placeholder='Мой статус'/>
                </div>
                <div>
                    Изображение профиля  
                    <input type="file" name="profileImg" id="" />
                    Изображение обложки
                    <input type="file" name="coverImg" id="" />
                </div>
                <button className='button infoButton'>Обновить</button>
        </form>
    </Modal>
  );
}
export default ProfileModal