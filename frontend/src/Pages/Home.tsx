import React from 'react'
import Layout from '../component/Layout'
import Card from '../component/Card'
interface Data {
  image: string;
  name: string;
  subname: string;
}
const data:Data[]=[
  {
    "image": "https://s3-alpha-sig.figma.com/img/0b37/e7ea/c9a0023b7036e806916080809d74398e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oUwJSQdgythvcmUhtAFNi86-QpzrJA60Gze5L5ETRae-SdfEkFuMqZ2sqQAbmm75WethvSuY8gKHtwFh~bAKtqjcwkD0flhyMUCQ1J4a-MWjWzooWvjkxD~gKxlKu9c~8E0eNRaXeMDP90bRBU6QICARJsTMcXhQR5nus2cULFmRvGkZdvQqe~ZFZgN7alrG1O6~Mn7-R8zZMPrwpNL-7fXaqAPKOqy6SrlOcvtncNX6skqfx7Xd-bzXt25EhPPjft1BeSF8PYvDerPYyPxOj7JxNCpN12T8dbqiEjh-RxgwG-ykxmz~6dqa46iSiOKlOu1HHlGHfA-s8~drhg-zsA__",
    "name": "CountrySide 2024",
    "subname": "4 save"
  },
  {
    "name": "CountrySide 2024",
    "image": "https://s3-alpha-sig.figma.com/img/24a2/c350/226d1d5d941ac96dd6be6574626624c0?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q6TbR59HdIHdjz4~WJwu47qMhDy9uyK0x8Djyr~LQkbIk4O~oDrxwoutQjzPhTmgD60KU8BBUZd2veffTkIJ8ei2YQpXSOPoauYQBn4Mi2e9Nd3gKgpB6yf-oBujjdwI~QetqBua5Nd5ftDSWL7jw0JyLCFaLaU9y8i00rRYpp7cwtBteZVQMHknAadkdhtGzpLtv2O75pzpUm6ecIAccUAtOuWAmnptFM2Ou~8wwgWa4E2Pr9ZrXyVtvII1GczlDhFkwXIZ-31MFBt6fBFtDazJRhtXH1u8CzZ5abuR4Stv~WAanSbz8I7PmiLeKqVfv02kOqivgpzzkCXJEYHrbQ__",
    "subname": "4 save"
  },
  {
    "image": "https://s3-alpha-sig.figma.com/img/0b37/e7ea/c9a0023b7036e806916080809d74398e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oUwJSQdgythvcmUhtAFNi86-QpzrJA60Gze5L5ETRae-SdfEkFuMqZ2sqQAbmm75WethvSuY8gKHtwFh~bAKtqjcwkD0flhyMUCQ1J4a-MWjWzooWvjkxD~gKxlKu9c~8E0eNRaXeMDP90bRBU6QICARJsTMcXhQR5nus2cULFmRvGkZdvQqe~ZFZgN7alrG1O6~Mn7-R8zZMPrwpNL-7fXaqAPKOqy6SrlOcvtncNX6skqfx7Xd-bzXt25EhPPjft1BeSF8PYvDerPYyPxOj7JxNCpN12T8dbqiEjh-RxgwG-ykxmz~6dqa46iSiOKlOu1HHlGHfA-s8~drhg-zsA__",
    "name": "CountrySide 2024",
    "subname": "4 save"
  },
  {
    "name": "CountrySide 2024",
    "image": "https://s3-alpha-sig.figma.com/img/24a2/c350/226d1d5d941ac96dd6be6574626624c0?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q6TbR59HdIHdjz4~WJwu47qMhDy9uyK0x8Djyr~LQkbIk4O~oDrxwoutQjzPhTmgD60KU8BBUZd2veffTkIJ8ei2YQpXSOPoauYQBn4Mi2e9Nd3gKgpB6yf-oBujjdwI~QetqBua5Nd5ftDSWL7jw0JyLCFaLaU9y8i00rRYpp7cwtBteZVQMHknAadkdhtGzpLtv2O75pzpUm6ecIAccUAtOuWAmnptFM2Ou~8wwgWa4E2Pr9ZrXyVtvII1GczlDhFkwXIZ-31MFBt6fBFtDazJRhtXH1u8CzZ5abuR4Stv~WAanSbz8I7PmiLeKqVfv02kOqivgpzzkCXJEYHrbQ__",
    "subname": "4 save"
  },
  {
    "image": "https://s3-alpha-sig.figma.com/img/0b37/e7ea/c9a0023b7036e806916080809d74398e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oUwJSQdgythvcmUhtAFNi86-QpzrJA60Gze5L5ETRae-SdfEkFuMqZ2sqQAbmm75WethvSuY8gKHtwFh~bAKtqjcwkD0flhyMUCQ1J4a-MWjWzooWvjkxD~gKxlKu9c~8E0eNRaXeMDP90bRBU6QICARJsTMcXhQR5nus2cULFmRvGkZdvQqe~ZFZgN7alrG1O6~Mn7-R8zZMPrwpNL-7fXaqAPKOqy6SrlOcvtncNX6skqfx7Xd-bzXt25EhPPjft1BeSF8PYvDerPYyPxOj7JxNCpN12T8dbqiEjh-RxgwG-ykxmz~6dqa46iSiOKlOu1HHlGHfA-s8~drhg-zsA__",
    "name": "CountrySide 2024",
    "subname": "4 save"
  },
  {
    "name": "CountrySide 2024",
    "image": "https://s3-alpha-sig.figma.com/img/24a2/c350/226d1d5d941ac96dd6be6574626624c0?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q6TbR59HdIHdjz4~WJwu47qMhDy9uyK0x8Djyr~LQkbIk4O~oDrxwoutQjzPhTmgD60KU8BBUZd2veffTkIJ8ei2YQpXSOPoauYQBn4Mi2e9Nd3gKgpB6yf-oBujjdwI~QetqBua5Nd5ftDSWL7jw0JyLCFaLaU9y8i00rRYpp7cwtBteZVQMHknAadkdhtGzpLtv2O75pzpUm6ecIAccUAtOuWAmnptFM2Ou~8wwgWa4E2Pr9ZrXyVtvII1GczlDhFkwXIZ-31MFBt6fBFtDazJRhtXH1u8CzZ5abuR4Stv~WAanSbz8I7PmiLeKqVfv02kOqivgpzzkCXJEYHrbQ__",
    "subname": "4 save"
  },
  {
    "image": "https://s3-alpha-sig.figma.com/img/0b37/e7ea/c9a0023b7036e806916080809d74398e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oUwJSQdgythvcmUhtAFNi86-QpzrJA60Gze5L5ETRae-SdfEkFuMqZ2sqQAbmm75WethvSuY8gKHtwFh~bAKtqjcwkD0flhyMUCQ1J4a-MWjWzooWvjkxD~gKxlKu9c~8E0eNRaXeMDP90bRBU6QICARJsTMcXhQR5nus2cULFmRvGkZdvQqe~ZFZgN7alrG1O6~Mn7-R8zZMPrwpNL-7fXaqAPKOqy6SrlOcvtncNX6skqfx7Xd-bzXt25EhPPjft1BeSF8PYvDerPYyPxOj7JxNCpN12T8dbqiEjh-RxgwG-ykxmz~6dqa46iSiOKlOu1HHlGHfA-s8~drhg-zsA__",
    "name": "CountrySide 2024",
    "subname": "4 save"
  },
  {
    "image": "https://s3-alpha-sig.figma.com/img/24a2/c350/226d1d5d941ac96dd6be6574626624c0?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q6TbR59HdIHdjz4~WJwu47qMhDy9uyK0x8Djyr~LQkbIk4O~oDrxwoutQjzPhTmgD60KU8BBUZd2veffTkIJ8ei2YQpXSOPoauYQBn4Mi2e9Nd3gKgpB6yf-oBujjdwI~QetqBua5Nd5ftDSWL7jw0JyLCFaLaU9y8i00rRYpp7cwtBteZVQMHknAadkdhtGzpLtv2O75pzpUm6ecIAccUAtOuWAmnptFM2Ou~8wwgWa4E2Pr9ZrXyVtvII1GczlDhFkwXIZ-31MFBt6fBFtDazJRhtXH1u8CzZ5abuR4Stv~WAanSbz8I7PmiLeKqVfv02kOqivgpzzkCXJEYHrbQ__",
    "name": "CountrySide 2024",
    "subname": "4 save"
  }
]
const Home = () => {
  return (
    <Layout>
      <div className='lg:w-3/4 md:w-1/2 w-full m-auto'>
       <h1 className='text-[50px] mt-5 font-semibold lg:text-left text-center'>Wishlists</h1>
       <div className='flex flex-wrap lg:justify-between justify-center lg:pb-[47px]'>
          {data.map((k, index) => (
            <Card key={index} img={k.image} name={k.name} subname={k.subname} />
          ))}
          </div>
      </div>
    </Layout>
  )
}

export default Home