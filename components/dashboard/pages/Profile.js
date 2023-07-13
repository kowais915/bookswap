import Image from "next/image";
import styles from "../../../styles/Dashboard.module.css";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Profile = () => {
  return (
    <div>
      <div>
        <Stack direction="row" spacing={10}>
          <Stack spacing={2}>
            <Image
              src="/user.jpeg"
              alt="user image"
              width={200}
              height={200}
              className={styles.image}
            />

            <Typography align="center">Owais Khan</Typography>
          </Stack>

          <div className="location">
            <h3>Loction: Post office Behlola District Charsadda</h3>
          </div>
        </Stack>
      </div>

      <div className="info"></div>
    </div>
  );
};

export default Profile;
