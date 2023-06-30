## 1\
Two-way data binding trong React là một cách để cập nhật trạng thái giữa một component cha và một component con một cách tự động. Khi trạng thái của một component thay đổi, nó sẽ tự động cập nhật giá trị của component con liên quan và ngược lại.

Để thực hiện two-way data binding trong React, ta có thể sử dụng các thuộc tính và sự kiện của JSX. Thường thì ta sử dụng thuộc tính "value" để gán giá trị ban đầu cho một component con, và sử dụng sự kiện "onChange" để lắng nghe sự thay đổi của component con.

Ví dụ, trong component cha, ta có một trạng thái có tên là "name":

jsx
Copy code
import React, { useState } from 'react';

function ChaComponent() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <ConComponent name={name} onChange={handleChange} />
    </div>
  );
}
Trong component con, ta nhận giá trị "name" thông qua props và sử dụng thuộc tính "value" và sự kiện "onChange" để tương tác với component cha:

jsx
Copy code
import React from 'react';

function ConComponent({ name, onChange }) {
  return (
    <div>
      <input type="text" value={name} onChange={onChange} />
    </div>
  );
}
Khi người dùng nhập vào ô input của component cha hoặc component con, giá trị sẽ được cập nhật tự động và đồng bộ trong cả hai component. Điều này cho phép hai component cùng chia sẻ và cập nhật dữ liệu một cách liên tục.

Đó là cách thực hiện two-way data binding trong React để cập nhật trạng thái giữa component cha và component con.

## 2
Context trong React là một cơ chế giúp truyền dữ liệu qua các thành phần trong cây thành phần mà không cần truyền qua props từ thành phần cha tới thành phần con. Nó giúp giải quyết vấn đề khi cần chia sẻ dữ liệu chung hoặc truyền dữ liệu qua nhiều cấp độ thành phần mà không cần đi qua các thành phần trung gian.

Context giúp giải quyết vấn đề khi cần chia sẻ dữ liệu chung mà không muốn truyền dữ liệu qua nhiều thành phần con. Thay vì truyền props qua các thành phần trung gian, ta có thể sử dụng Context để tạo ra một "ngữ cảnh" chứa dữ liệu và các thành phần con có thể truy cập trực tiếp đến ngữ cảnh đó.

Ví dụ, ta có một Context để chia sẻ dữ liệu ngôn ngữ (language) trong toàn bộ ứng dụng:

jsx
Copy code
import React, { createContext, useState } from 'react';

// Tạo Context
const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={language}>
      <Navbar />
      <Content />
    </LanguageContext.Provider>
  );
}

function Navbar() {
  return (
    <div>
      <LanguageButton />
    </div>
  );
}

function LanguageButton() {
  const language = useContext(LanguageContext);

  return (
    <button>{language}</button>
  );
}

function Content() {
  return (
    <div>
      <LanguageText />
    </div>
  );
}

function LanguageText() {
  const language = useContext(LanguageContext);

  return (
    <p>{language === 'en' ? 'Hello' : 'Xin chào'}</p>
  );
}
Trong ví dụ trên, Context được tạo bằng cách sử dụng hàm createContext(). Trong component App, ta bọc các thành phần Navbar và Content bên trong LanguageContext.Provider và truyền giá trị language vào value của provider. Khi giá trị language thay đổi, tất cả các thành phần con trong cây thành phần sẽ được cập nhật tự động.

Trong các thành phần Navbar, LanguageButton, Content, LanguageText, ta sử dụng hook useContext để truy cập và sử dụng giá trị language từ Context.

Context giúp giải quyết vấn đề khi cần truyền dữ liệu qua nhiều cấp độ thành phần mà không cần đi qua các thành phần trung gian. Nó giúp truyền dữ liệu một cách trực tiếp và thuận tiện hơn so với truyền props qua các thành phần trung gian, giúp mã nguồn gọn gàng và dễ bảo trì hơn.

Tuy nhiên, Context cũng nên được sử dụng một cách cân nhắc. Nếu chỉ có một số ít thành phần cần truy cập dữ liệu chung, việc sử dụng Context có thể làm cho mã nguồn phức tạp hơn. Trong những trường hợp đó, việc truyền dữ liệu qua props vẫn là một phương pháp hợp lý hơn.