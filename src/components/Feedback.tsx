import { useGameContext } from '../GameContext';

type FeedbackProps = {
  showFeedback: boolean;
};

const Feedback = ({ showFeedback }: FeedbackProps) => {
  const { state } = useGameContext();

  return (
    <div className={`${!showFeedback && 'invisible'} w-56 p-4 mr-10}`}>
      {state.rows.slice(0, state.activeRowIdx).map((row, index) => (
        <div key={index} className="mt-8">
          {row.feedback && (
            <div className="flex items-center ">
              <div className="w-2">{row.feedback.exactMatch}</div>
              <span className="inline-block w-6 h-6 mx-2 rounded-full bg-slate-950" />
              <div className="w-2">{row.feedback.partialMatch}</div>
              <span className="inline-block w-6 h-6 mx-2 rounded-full bg-gray-100 border border-slate-500" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Feedback;
