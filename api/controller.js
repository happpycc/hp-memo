import MemoModel from "./model.js";

const vertifyTexts = (texts) => {
  if (typeof texts !== "string") {
    return true;
  }
  if (texts.trim() === "") {
    return true;
  }
  return false;
};

export const getAllMemos = async (_, res) => {
  await MemoModel.find()
    .sort({ create_time: -1 })
    .then((memos) => res.json(memos))
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
};

export const deleteAllMemos = async (_, res) => {
  await MemoModel.deleteMany({})
    .then((ret) => {
      console.log(ret);
      res.status(200).send("Deleted all the memos successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
};

export const addMemo = async (req, res) => {
  const { texts } = req.body;
  if (vertifyTexts(texts)) {
    return res.status(400);
  }
  const MemoDoc = new MemoModel({ texts });
  await MemoDoc.save()
    .then((memo) => {
      res.status(200).send(memo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
};

export const updateMemo = async (req, res) => {
  const { texts } = req.body;
  const update_time = Date.now();
  if (vertifyTexts(texts)) {
    return res.status(400);
  }
  await MemoModel.updateOne(
    { _id: req.params.id },
    {
      $set: {
        update_time,
        texts,
      },
    },
  )
    .then(() => {
      res.status(200).send({ update_time, texts });
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
    });
};

export const deleteMemo = async (req, res) => {
  await MemoModel.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send("Deleted the memo successfully.");
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
};

export const getMemo = async (req, res) => {
  await MemoModel.findById(req.params.id)
    .then((memo) => res.json(memo))
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
};
