import clsx from 'clsx'
import toast from 'react-hot-toast'

export default function Item({ isFirst, isLast, isReleased, hasVoted, feature }) {
  const upvote = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/vote', {
      body: JSON.stringify({
        id: feature.id,
        title: feature.title,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      return toast.error(error)
    }

    mutate('/api/features')
  }

  return (
    <div
      className={clsx(
        'p-6 mx-8 flex items-center border-t border-l border-r',
        isFirst && 'rounded-t-md',
        isLast && 'border-b rounded-b-md'
      )}
    >
      <button
        className={clsx(
          'ring-1 ring-gray-200 rounded-full w-8 min-w-[2rem] h-8 mr-4 focus:outline-none focus:ring focus:ring-blue-300',
          (isReleased || hasVoted) && 'bg-green-100 cursor-not-allowed ring-green-300'
        )}
        disabled={isReleased || hasVoted}
        onClick={upvote}
      >
        {isReleased ? '✅' : '👍'}
      </button>
      <h3 className="w-full font-semibold text-left text">{feature.title}</h3>
      <div className="px-2 ml-2 text-sm text-gray-700 bg-gray-200 rounded-xl">{feature.score}</div>
    </div>
  )
}
