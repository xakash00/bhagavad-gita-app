import Head from "next/head";
import HomePage from "@/src/PageComponents/Home";
import HeaderLayout from "@/src/Layouts/header";
import { wrapper } from "@/src/redux/store";
import { getChapterAction } from "@/src/redux/actions/actions";
import { END } from "redux-saga";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderLayout>
        <HomePage />
      </HeaderLayout>
    </>
  );
};
export const getServerSideProps = wrapper.getServerSideProps((store) => async({req, res, ...etc}) => {
  console.log(store);
  // if (!store.getState().chapterData) {
  //  store.dispatch(getChapterAction());
  //   console.log("ending saga on server now...");
  //  store.dispatch(END);
  // } 
  // await store.sagaTask.toPromise();

});
export default Home;
