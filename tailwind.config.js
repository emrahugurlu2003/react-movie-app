/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  //? kendi theme ayarlarımızı eklemek için bu kısmı ekliyoruz
  theme: {
    //! eğer tailwind'in default theme ayarları yerine kendimizinkini eklemek istemiyorsak mutlaka extend objesi içinde eklememiz gerekli yoksa tüm theme objesi değişir ve kendi eklediklerimiz dışındakileri kullanamayız.
    extend: {
      colors: {
        "gray-dark-main": "#23242a",
        "gray-dark-second": "#28292d",
        "gray-light": "#d3dce6",
        "red-main": "#ff4b45",
      },
    },
  },
  //!ui kit kullanılacaksa burada belirtilir. Örneğin flowbite.com
  //!->Get Started->npm install flowbite->module.exports={plugins: içine
  //!plugins:[require('flowbite/plugin')]
  //!javascript kuulanan yapılar olacaksa bu pluginler kullanılabilir.
  plugins: [],

  //$Aşağıdaki tanımlama ile hangi elementlerin dark modda olacağını,
  // ona class="dark" property vererek yapacağımızı bildirmiş oluruz.
  // public dizininde index.html içinde de html class="dark" lang="en">
  darkMode: "class",
};
