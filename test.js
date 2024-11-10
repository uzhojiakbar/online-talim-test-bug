


  // 3 ta role boladi
// 1. admin
// 2. teacher
// 3. user

// const registerUser = async () => {
//   try {
//     const res = await fetch("https://onlinetalim-backend.onrender.com/api/auth/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: "asdt",
//         password: "asdt",
//         firstname: "user test",
//         lastname: "Murodillayev",
//         group: "36-att-23",
//         role: "teacher",
//       }),
//     });

//     if (!res.ok) {
//       // Agar javob muvaffaqiyatli kelmagan bo'lsa, xatolikni qaytarish
//       const errorData = await res.json();
//       console.error("Error:", errorData);
//       return;
//     }

//     const data = await res.json();
//     console.log("User registered successfully:", data);
//   } catch (error) {
//     console.error("Network or server error:", error);
//   }
// };

// registerUser();



const newLesson = {
  nomi: "asdasd",
  desc: "test a",
  teacher: "Olim Aliyev",
  views: 10,
};

fetch("https://onlinetalim-backend.onrender.com/api/lessons", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzBmNmQ0MDI4NzgzMjcxZDllNzg0YyIsInVzZXJuYW1lIjoiYXNkdCIsImZpcnN0bmFtZSI6InVzZXIgdGVzdCIsImxhc3RuYW1lIjoiTXVyb2RpbGxheWV2IiwiZ3JvdXAiOiIzNi1hdHQtMjMiLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTczMTI2MjIwMiwiZXhwIjoxNzMxMjY1ODAyfQ.DopMKT8PRTiVRnYEEzoo1dK7N3FP81-hLbHI2MtvI2A", // Token qo'yiladi
  },
  body: JSON.stringify(newLesson),
})
  .then((response) => response.json())
  .then((data) => console.log("Yangi dars qo'shildi:", data))
  .catch((error) => console.error("Xatolik:", error));