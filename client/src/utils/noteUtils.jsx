export const notesLoader = async ({ params: { folderId } }) => {
  const query = `query Folders($folderId: String) {
      folder(folderId: $folderId) {
        id
        name
        notes {
          id
          content
        }
      }
    }`;
  const res = await fetch("http://localhost:4000/grapql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        folderId,
      },
    }),
  });

  const { data } = await res.json();
  return data;
};

export const noteLoader = async ({ params: { noteId } }) => {
  const query = `query Folders($noteId: String) {
    note(noteId: $noteId) {
      content
      id
    }
  }`;
  const res = await fetch("http://localhost:4000/grapql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        noteId,
      },
    }),
  });

  const { data } = await res.json();
  return data;
};
