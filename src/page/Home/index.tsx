import { useEffect, useState } from "react";
import styles from './index.module.css';
import { getModuleData } from "../../service/request";
import RedPackage from "../../components/RedPackage";

const Home = () => {
  const [moduleData, setModuleData] = useState([]);
  useEffect(() => {
    getModuleData().then(res => {
      setModuleData(res?.list || []);
    });
  }, []);
  if (moduleData.length === 0) return null;
  return (
    <div className={styles.homePage}>
      <p className={styles.title}>1688进货红包</p>
      {
        moduleData.map((item, i) => {
          return <RedPackage key={i} data={item} />
        })
      }
    </div>
  )
}

export default Home;