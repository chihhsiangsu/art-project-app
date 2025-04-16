export default function CommentForm() {
  return (
    <>
      <form>
        <label
          htmlFor="comment"
          style={{ fontSize: "13px", marginRight: "5px" }}
        >
          Leave a comment:
        </label>
        <input
          type="text"
          id="comment"
          name="comment"
          placeholder="Leave your comment..."
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
