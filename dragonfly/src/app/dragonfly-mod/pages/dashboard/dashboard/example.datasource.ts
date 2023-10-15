import { DataSource } from '@angular/cdk/collections';
import { Dragonfly } from '../../../models/dragonfly.interface';
import { Observable, ReplaySubject } from 'rxjs';
import { Component, inject } from '@angular/core';

export class ExampleDataSource implements DataSource<Dragonfly> {
    private _dataStream = new ReplaySubject<Dragonfly[]>();
  
    constructor(initialData: Dragonfly[]) {
      this.setData(initialData);
    }
  
    connect(): Observable<Dragonfly[]> {
      return this._dataStream;
    }
  
    disconnect() { }
  
    setData(data: Dragonfly[]) {
      this._dataStream.next(data);
    }
  }