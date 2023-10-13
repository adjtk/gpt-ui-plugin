import { Button } from "@nextui-org/react";
import {
  RefreshCcw as ReloadIcon,
  Settings as OptionsIcon,
  Github,
} from "lucide-react";
import { optionsUrl } from "utils/chrome";

const Header = () => {
  return (
    <div className="py-2 flex w-full items-center mb-2">
      <div className="ml-auto gap-x-3 flex items-center">
        <Button
          startContent={<Github size={16} />}
          className="ml-auto"
          color="primary"
          isIconOnly
          as="a"
          href="https://github.com/oggnimodd/ai-chat-snippet"
          target="_blank"
          size="sm"
        />
        <Button
          startContent={<OptionsIcon size={16} />}
          className="ml-auto"
          color="primary"
          isIconOnly
          as="a"
          href={optionsUrl}
          target="_blank"
          size="sm"
        />
        <Button
          onPress={() => window.location.reload()}
          startContent={<ReloadIcon size={16} />}
          className="ml-auto"
          color="primary"
          isIconOnly
          size="sm"
        />
      </div>
    </div>
  );
};

export default Header;