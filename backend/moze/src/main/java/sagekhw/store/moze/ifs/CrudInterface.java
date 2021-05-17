package sagekhw.store.moze.ifs;

import sagekhw.store.moze.model.param.header.Header;

public interface CrudInterface<Req,Res> {

    Header<Res> create(Header<Req> request);

    Header<Res> read(Long id);

    Header<Res> update(Header<Req> request);

    Header delete(Long id);
}