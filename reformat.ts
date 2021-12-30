import * as fs from "fs";
type RB = {
  mints: any[];
};
import * as rb from "./rb.json";

async function main(args: any) {
  const file = args[0];
  const output = "./output.json";
  let outputFile = [];
  const rbtest = rb as RB;
  rbtest.mints.map((item: any, index: number) => {
    // if (index === 0) {
    //   console.log("item", item);
    //   console.log("item.rank_explain", item.rank_explain);
    //   console.log("item.rank_explain[8]", item.rank_explain[8]);
    // }
    let cheese_index;
    item.rank_explain.map((cheese: any, index: number) => {
      if (cheese.attribute === "Cheeserank") {
        cheese_index = index;
      }
    });
    let cheese;
    if (item.rank_explain[cheese_index].value === "1cheeze") {
      cheese = 1;
    } else if (item.rank_explain[cheese_index].value === "2cheeze") {
      cheese = 2;
    } else if (item.rank_explain[cheese_index].value === "3cheeze") {
      cheese = 3;
    }
    outputFile.push({
      mint: item.mint,
      cheese: cheese,
    });
  });

  fs.writeFile(output, JSON.stringify(outputFile), function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("output saved");
  });
}

if (require.main) main(process.argv.slice(2)).catch(console.error);
