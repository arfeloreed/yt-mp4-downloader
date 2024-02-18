import youtubeDl from "youtube-dl-exec";
import createLogger from "progress-estimator";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const url =
  "https://www.youtube.com/watch?v=VHMAcM1T1IY";
// convert the import.meta.url to filepath
const __filename = fileURLToPath(import.meta.url);
// get the directory name
const __dirname = dirname(__filename);
const logger = createLogger({
  storagePath: join(__dirname, ".progress-estimator"),
});

(async () => {
  try {
    const result = youtubeDl(url, {
      format: "mp4",
      output: "/home/reed/Downloads/%(title)s.%(ext)s",
    });

    const dlLog = await logger(result, `Obtaining ${url}`);
    console.log(dlLog);
  } catch (err) {
    console.log("Can't download video.", err);
  }
})();
