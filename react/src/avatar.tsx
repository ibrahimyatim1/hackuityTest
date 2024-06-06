import React, { useState, ChangeEvent } from "react";

interface Props {
  resolveAvatar?: (pseudo: string) => Promise<string> | string;
}

const ShowAvatar: React.FC<Props> = ({ resolveAvatar }) => {
  const [pseudo, setPseudo] = useState<string>("");
  const [avatarURL, setAvatarURL] = useState<string>("");

  const handlePseudoChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const newPseudo = event.target.value;
    setPseudo(newPseudo);
    let avatarURL;

    try {
      avatarURL = await resolveAvatar(newPseudo);
      setAvatarURL(avatarURL);
    } catch (error) {
      console.error(error.message);
      setAvatarURL("");
    }
  };

  return (
    <div>
      <div>
        <label>pseudo</label>
        <input type="text" value={pseudo} onChange={handlePseudoChange} />
      </div>
      <div>
        {avatarURL && avatarURL != "" ? (
          <>
            <img src={avatarURL} alt="Avatar" />
            <label htmlFor="pseudo">pseudo</label>
          </>
        ) : (
          <div>No avatar available</div>
        )}
      </div>
    </div>
  );
};

export default ShowAvatar;
